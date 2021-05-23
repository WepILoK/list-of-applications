import React, {useEffect, useState} from "react";
import {ModalBlock} from "./ModalBlock";
import Button from "@material-ui/core/Button";
import {useStyles} from "../pages/theme";
import {useDispatch, useSelector} from "react-redux";
import {fetchCreateItem} from "../store/ducks/listItems/actionCreators";
import {CircularProgress} from "@material-ui/core";
import {LoadingStatus} from "../store/types";
import {selectItemLoadingStatus} from "../store/ducks/listItems/selectors";


interface ICreateApplication {
    openEditItem: () => void
}

export interface ITextAreaValues {
    name: string
    description: string
}

export const CreateApplication: React.FC<ICreateApplication> = ({openEditItem}) => {
    const [text, setText] = useState<ITextAreaValues>({name: '', description: ''})
    const dispatch = useDispatch()
    const loadingStatus = useSelector(selectItemLoadingStatus)
    const classes = useStyles()

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

    const onSubmit = () => {
        dispatch(fetchCreateItem(text))
        setText({name: '', description: ''})
        openEditItem()
            // console.log(items[0]?.id)

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