import React, {useEffect, useState} from "react";
import {useParams, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ModalBlock} from "./ModalBlock";
import {Button, Select} from "@material-ui/core";
import {useStyles} from "../pages/theme";
import {selectItem, selectStatuses} from "../store/ducks/listItems/selectors";
import ArrowDownIcon from '@material-ui/icons/ArrowDropDown';
import {fetchItem, setItem} from "../store/ducks/listItems/actionCreators";


export const EditApplication: React.FC = () => {
    const classes = useStyles()
    const item = useSelector(selectItem)
    const [status, setStatus] = useState<string | undefined>(item?.statusName)
    const [editStatus, setEditStatus] = useState(false)
    const dispatch = useDispatch()
    const statuses = useSelector(selectStatuses)

    const params: { id: string } = useParams();
    const itemId = Number(params.id)

    const handleChange = (event: React.ChangeEvent<{ status?: string, value: unknown }>) => {
        toggleEditStatus()
        const name = event.target.status;
        setStatus(name);
    };

    const toggleEditStatus = () => {
        setEditStatus(!editStatus)
    }

    useEffect(() => {
        dispatch(fetchItem(itemId))

        return () => {
            dispatch(setItem(undefined))
        }
    }, [itemId])


    const obj = {
        "id": 0,
        "name": "string",
        "description": "string",
        "comment": "string",
        "price": 0,
        "taskTypeId": 0,
        "statusId": 0,
        "priorityId": 0,
        "serviceId": 0,
        "resolutionDatePlan": "2021-05-20T10:53:34.557Z",
        "tags": [
            0
        ],
        "initiatorId": 0,
        "executorId": 0,
        "executorGroupId": 0
    }

    if (!item) {
        return null
    } else {
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
                                  placeholder={'Добавление коментариев'}/>
                            <div>
                                <Button variant="contained" color="primary">
                                    Сохранить
                                </Button>
                            </div>
                        </div>
                        {item.lifetimeItems && item.lifetimeItems.map(obj =>
                            <div key={obj.id} className={classes.editApplicationComments}>
                                <div className={classes.editApplicationCommentsHeader}>
                                    <div className={classes.editApplicationCommentsAvatar}/>
                                    <div>
                                        <div className={classes.editApplicationCommentsAuthor}>
                                            {obj.userName}
                                        </div>
                                        <div className={classes.editApplicationCommentsTime}>
                                            {obj.createdAt}
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.editApplicationCommentsTitle}>
                                    {obj.comment}
                                </div>
                            </div>
                        )}

                    </div>
                    <div className={classes.editApplicationRightBlock}>
                        <div className={classes.editApplicationStatus}>
                            <div className={classes.editApplicationStatusIcon}
                                 style={{backgroundColor: `${item.statusRgb}`}}/>
                            {!editStatus ?
                                <div onClick={toggleEditStatus} className={classes.editApplicationStatusTitle}>
                                    {item.statusName}
                                    <ArrowDownIcon/>
                                </div>
                                : <Select
                                    className={classes.editApplicationStatusSelect}
                                    native
                                    value={status}
                                    onChange={handleChange}>
                                    {statuses.map(obj =>
                                        <option key={obj.id} value={obj.id}>
                                            {obj.name}
                                        </option>)}
                                </Select>
                            }

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
                            <div>{item.executorName}</div>
                        </div>
                        <div className={classes.editApplicationMargin}>
                            <div className={classes.editApplicationHead}>
                                Приоритет
                            </div>
                            <div>{item.priorityName}</div>
                        </div>
                        <div className={classes.editApplicationMargin}>
                            <div className={classes.editApplicationHead}>
                                Скрок
                            </div>
                            <div>{item.resolutionDatePlan ? item.resolutionDatePlan : 'Не указано'}</div>
                        </div>
                        <div className={classes.editApplicationMargin}>
                            <div className={classes.editApplicationHead}>
                                Теги
                            </div>
                            <div>{item.tags?.map(item =>
                                <div className={classes.editApplicationTags}>
                                    {item.name}
                                </div>
                            )}</div>
                        </div>
                    </div>
                </div>
            </ModalBlock>
        )
    }
}