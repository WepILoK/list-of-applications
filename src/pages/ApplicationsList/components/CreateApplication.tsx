import React, {useEffect, useState} from "react";
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";

import {useApplicationListComponentsStyles} from "./style";

import {CircularProgress} from "@material-ui/core";
import Button from "@material-ui/core/Button";

import {ModalBlock} from "./ModalBlock";
import {fetchCreateItem} from "../../../store/ducks/listItems/actionCreators";
import {selectItem, selectItemLoadingStatus} from "../../../store/ducks/listItems/selectors";
import {LoadingStatus} from "../../../store/ducks/listItems/contracts/state";
import {EnumStateType, updateStateValue} from "../../../utils/updateStateValue";


export interface ITextAreaValues {
    name: string
    description: string
}

export const CreateApplication: React.FC = () => {
    const classes = useApplicationListComponentsStyles()
    const [text, setText] = useState<ITextAreaValues>({name: '', description: ''})
    const loadingStatus = useSelector(selectItemLoadingStatus)
    const item = useSelector(selectItem)
    const dispatch = useDispatch()
    const history = useHistory()

    const handleChangeTextarea = (event: React.FormEvent<HTMLTextAreaElement>, type: EnumStateType) => {
        const updateText = updateStateValue(event.currentTarget.value, type)
        setText(prevState => ({...prevState, ...updateText}))
    }

    const onSubmit = () => {
        dispatch(fetchCreateItem({...text}))
        setText({name: '', description: ''})
    }

    useEffect(() => {
        if (item.id !== 0) history.push(`/applications/edit/${item.id}`)
    }, [item.id])

    return (
        <ModalBlock title='Новая заявка'>
            <div className={classes.createApplicationForm}>
                <div>
                    <div>Название</div>
                    <textarea
                        value={text?.name}
                        onChange={event => handleChangeTextarea(event, EnumStateType.NAME)}
                        className={classes.createApplicationFormName}/>
                </div>
                <div>
                    <div>Описание</div>
                    <textarea
                        value={text?.description}
                        onChange={event => handleChangeTextarea(event, EnumStateType.DESCRIPTION)}
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