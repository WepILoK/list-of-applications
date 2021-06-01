import React, {useEffect, useState} from "react";
import {useHistory} from 'react-router-dom';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {useStyles} from "../pages/theme";
import {Button} from "@material-ui/core";
import ArrowDownIcon from '@material-ui/icons/ArrowDropDown';

import ruLang from 'date-fns/locale/ru'
import format from 'date-fns/format'

import {ModalBlock} from "./ModalBlock";
import {
    selectEditItemLoadingStatus,
    selectItem,
    selectStatuses,
    selectUsers
} from "../store/ducks/listItems/selectors";
import {fetchItem, updateItem} from "../store/ducks/listItems/actionCreators";
import {IReturnType, selectById} from "../utils/selectById";


export const EditApplication: React.FC = () => {
    const classes = useStyles()
    let newComments
    const item = useSelector(selectItem)
    const statuses = useSelector(selectStatuses)
    const users = useSelector(selectUsers)
    const editLoadingStatus = useSelector(selectEditItemLoadingStatus)
    const dispatch = useDispatch()
    const history = useHistory()

    const [status, setStatus] = useState<IReturnType>({
        name: item?.statusName, rgb: item?.statusRgb, id: item?.statusId
    })
    const [executor, setExecutor] = useState<IReturnType>({
        name: item?.executorName, id: item?.executorId
    })
    const params: { id: string } = useParams();
    const itemId = Number(params.id)
    const [editStatus, setEditStatus] = useState(false)
    const [editExecutor, setEditExecutor] = useState(false)
    const [text, setText] = useState<string>('')

    const handleChangeStatus = (event: React.ChangeEvent<{ value: unknown }>) => {
        toggleEditStatus()
        const value = Number(event.target.value)
        setStatus(prevState => {
            return {...prevState, id: value}
        });
        setStatus(selectById(value, statuses));
        updateData()
    };

    const handleChangeExecutor = (event: React.ChangeEvent<{ value: unknown }>) => {
        toggleEditExecutor()
        const value = Number(event.target.value)
        setExecutor(prevState => {
            return {...prevState, id: value}
        });
        setExecutor(selectById(value, users));
        updateData()
    };

    const handleChangeTextarea = (e: React.FormEvent<HTMLTextAreaElement>): void => {
        if (e.currentTarget) {
            setText(e.currentTarget.value)
        }
    }

    const toggleEditStatus = () => {
        setEditStatus(!editStatus)
    }
    const toggleEditExecutor = () => {
        setEditExecutor(!editExecutor)
    }

    const updateData = () => {
        if (status.id && executor.id) {
                console.log('und', {
                    id: itemId,
                    comment: text,
                    statusId: status.id,
                    executorId: executor.id
                })
                dispatch(updateItem({
                    id: itemId,
                    comment: text,
                    statusId: status.id,
                    executorId: executor.id
                }))
        }
        setText('')
    }


    useEffect(() => {
        history.push(`/applications/edit/${item?.id || itemId}`)
        dispatch(fetchItem(item?.id || itemId))
    }, [itemId, item?.id, dispatch, editLoadingStatus])

    if (item && itemId) {
        return (
            <ModalBlock title={`№ ${item.id}`} name={item.name}>
                <div className={classes.editApplication}>
                    <div className={classes.editApplicationLeftBlock}>
                        <div>
                            <div className={classes.editApplicationHeader}>
                                Описание
                            </div>
                            <div className={classes.editApplicationDescription}>
                                {item.description}
                            </div>
                        </div>
                        <div>
                        <textarea className={classes.editApplicationAddCommentTextArea}
                                  value={text}
                                  onChange={handleChangeTextarea}
                                  placeholder={'Добавление коментариев'}/>
                            <div>
                                <Button onClick={updateData} disabled={text === ''} variant="contained" color="primary">
                                    Сохранить
                                </Button>
                            </div>
                        </div>
                        <div className={classes.editApplicationComments}>
                            {item.lifetimeItems && item?.lifetimeItems.filter(obj => obj.comment).map(obj =>
                                <div key={obj.id} className={classes.editApplicationCommentItems}>
                                    <div className={classes.editApplicationCommentsHeader}>
                                        <div className={classes.editApplicationCommentsAvatar}/>
                                        <div>
                                            <div className={classes.editApplicationCommentsAuthor}>
                                                {obj.userName}
                                            </div>
                                            <div className={classes.editApplicationCommentsTime}>
                                                {format(new Date(obj.createdAt), 'H:mm dd MMM. yyyy г.', {locale: ruLang})}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={classes.editApplicationCommentsTitle}>
                                        {obj.comment}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={classes.editApplicationRightBlock}>
                        <div className={classes.editApplicationStatus}>
                            <div className={classes.editApplicationStatusIcon}
                                 style={{backgroundColor: `${status.rgb ? status.rgb : item.statusRgb}`}}/>
                            {editStatus ? (
                                <select
                                className={classes.editApplicationStatusSelect}
                                onChange={handleChangeStatus}>
                                {statuses.map(obj =>
                                    <option selected={obj.id === item?.statusId} key={obj.id} value={obj.id}>
                                        {obj.name}
                                    </option>)}
                            </select>) : (
                                <div onClick={toggleEditStatus} className={classes.editApplicationStatusTitle}>
                                    {status.name ? status.name : item.statusName}
                                    <ArrowDownIcon/>
                                </div>)}
                        </div>
                        <div className={classes.editApplicationMargin}>
                            <div className={classes.editApplicationHead}>
                                Заявитель
                            </div>
                            <div>Александр Вознесенский</div>
                        </div>
                        <div className={classes.editApplicationMargin}>
                            <div className={classes.editApplicationHead}>
                                Создана
                            </div>
                            <div>{item.initiatorName}</div>
                        </div>
                        <div className={classes.editApplicationMargin}>
                            <div className={classes.editApplicationHead}>
                                Исполнитель
                            </div>
                            {editExecutor ? (<select
                                className={classes.editApplicationExecutorSelect}
                                onChange={handleChangeExecutor}>
                                {users.map(obj =>
                                    <option selected={obj.id === item?.executorId} key={obj.id} value={obj.id}>
                                        {obj.name}
                                    </option>)}
                            </select>) : (
                                <div onClick={toggleEditExecutor} className={classes.editApplicationExecutor}>
                                    {executor.name ? executor.name : item.executorName}
                                    <ArrowDownIcon/>
                                </div>
                            )}
                        </div>
                        <div className={classes.editApplicationMargin}>
                            <div className={classes.editApplicationHead}>
                                Приоритет
                            </div>
                            <div>{item.priorityName}</div>
                        </div>
                        <div className={classes.editApplicationMargin}>
                            <div className={classes.editApplicationHead}>
                                Срок
                            </div>
                            <div>{format(new Date(item.resolutionDatePlan), 'H:mm dd MMM. yyyy г.', {locale: ruLang})}</div>
                        </div>
                        <div className={classes.editApplicationMargin}>
                            <div className={classes.editApplicationHead}>
                                Теги
                            </div>
                            <div>{item.tags?.map(item =>
                                <div key={item.id} className={classes.editApplicationTags}>
                                    {item.name}
                                </div>
                            )}</div>
                        </div>
                    </div>
                </div>
            </ModalBlock>
        )
    }
    return null
}