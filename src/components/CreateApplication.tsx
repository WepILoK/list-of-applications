import React, {useState} from "react";
import {useHistory} from 'react-router-dom';

import {ModalBlock} from "./ModalBlock";
import Button from "@material-ui/core/Button";
import {useStyles} from "../pages/theme";
import {useDispatch, useSelector} from "react-redux";
import {createItem} from "../store/ducks/listItems/actionCreators";
import {CircularProgress} from "@material-ui/core";
import {LoadingStatus} from "../store/types";
import {selectItemLoadingStatus} from "../store/ducks/listItems/selectors";
import {InItem} from "../store/ducks/listItems/contracts/state";
import {Api} from "../api/api";


export interface ITextAreaValues {
    name: string
    description: string
}

export const CreateApplication: React.FC = () => {
    const [text, setText] = useState<ITextAreaValues>({name: '', description: ''})
    const dispatch = useDispatch()
    const loadingStatus = useSelector(selectItemLoadingStatus)
    const classes = useStyles()
    const history = useHistory()

    const handleChangeName = (e: React.FormEvent<HTMLTextAreaElement>, type: 'name' | 'description'): void => {
        if (e.currentTarget) {
            let value = e.currentTarget.value
            if (type === 'name') {
                setText({...text, name: value})
            } else if (type === 'description') {
                setText({...text, description: value})
            }
        }
    }

    const onSubmit = async () => {
        const id: InItem['id'] = await Api.createItem(text)
        dispatch(createItem({...text, id }))
        setText({name: '', description: ''})
        history.push(`/applications/edit/${id}`)
    };

    return (
        <ModalBlock title='Новая заявка'>
            <div className={classes.createApplicationForm}>
                <div>
                    <div>Название</div>
                    <textarea
                        value={text?.name}
                        onChange={event => handleChangeName(event, 'name')}
                        className={classes.createApplicationFormName}/>
                </div>
                <div>
                    <div>Описание</div>
                    <textarea
                        value={text?.description}
                        onChange={event => handleChangeName(event, 'description')}
                        className={classes.createApplicationFormDescription}/>
                </div>
                <Button disabled={text.name.length < 5 || text.description.length < 5}
                        onClick={onSubmit} type='submit' variant='contained' color='primary'>
                    {loadingStatus === LoadingStatus.LOADING
                        ? <CircularProgress color='inherit' size={20}/>
                        : 'Сохранить'}
                </Button>
            </div>
        </ModalBlock>
    )
}