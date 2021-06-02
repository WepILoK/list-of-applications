import React, {useState} from "react";
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";

import {useStyles} from "../../theme";
import {CircularProgress} from "@material-ui/core";
import Button from "@material-ui/core/Button";

import {ModalBlock} from "./ModalBlock";
import {fetchCreateItem} from "../../../store/ducks/listItems/actionCreators";
import {selectItem, selectItemLoadingStatus} from "../../../store/ducks/listItems/selectors";

import {LoadingStatus} from "../../../store/types";


export interface ITextAreaValues {
    name: string
    description: string
}


export const CreateApplication: React.FC = () => {
    const [text, setText] = useState<ITextAreaValues>({name: '', description: ''})
    const dispatch = useDispatch()
    const loadingStatus = useSelector(selectItemLoadingStatus)
    const item = useSelector(selectItem)
    const classes = useStyles()
    const history = useHistory()

    const handleChangeName = (e: React.FormEvent<HTMLTextAreaElement>, type: 'name' | 'description'): void => {
        if (e.currentTarget) {
            let value = e.currentTarget.value
            if (type === 'name') {
                setText(prevState => {
                    return {...prevState, name: value}
                })
            } else if (type === 'description') {
                setText(prevState => {
                    return {...prevState, description: value}
                })
            }
        }
    }

    const onSubmit = () => {
        dispatch(fetchCreateItem({...text}))
        setText({name: '', description: ''})
        setTimeout(() => {
            history.push(`/applications/edit/${item?.id}`)
        }, 1500);


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