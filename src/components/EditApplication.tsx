import React, {useState} from "react";
import {ModalBlock} from "./ModalBlock";
import {IOrder} from "../store/ducks/listItems/contracts/state";
import {Button, Select} from "@material-ui/core";
import {useStyles} from "../pages/theme";
import {useSelector} from "react-redux";
import {selectStatuses} from "../store/ducks/listItems/selectors";
import ArrowDownIcon from '@material-ui/icons/ArrowDropDown';

interface IEditApplication {
    onClose: () => void
}


export const EditApplication: React.FC<IEditApplication & IOrder> = ({
                                                                         onClose,
                                                                         id,
                                                                         name,
                                                                         description,
                                                                         statusRgb,
                                                                         statusName,
                                                                         initiatorName,
                                                                         executorName,
                                                                         priorityName,
                                                                         resolutionDatePlan,
                                                                         tags
                                                                     }) => {
    const classes = useStyles()
    const [status, setStatus] = useState(statusName)
    const [editStatus, setEditStatus] = useState(false)
    const statuses = useSelector(selectStatuses)
    const handleChange = (event: React.ChangeEvent<{ status?: string, value: unknown }>) => {
        toggleEditStatus()
        const name = event.target.status;
        setStatus(name);
    };

    const toggleEditStatus = () => {
        setEditStatus(!editStatus)
    }

    if (!name) {
        return null
    }
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
    return (
        <ModalBlock title={`№ ${id}`} name={name} onClose={onClose}>
            <div className={classes.editApplication}>
                <div className={classes.editApplicationLeftBlock}>
                    <div>
                        <div className={classes.editApplicationHeader}>
                            Описание
                        </div>
                        <div className={classes.editApplicationDescription}>
                            {description}
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
                    <div className={classes.editApplicationComments}>
                        <div className={classes.editApplicationCommentsHeader}>
                            <div className={classes.editApplicationCommentsAvatar}/>
                            <div>
                                <div className={classes.editApplicationCommentsAuthor}>
                                    Иванов Александр
                                </div>
                                <div className={classes.editApplicationCommentsTime}>
                                    12 ав в фцвцфвцфвцфвцфв
                                </div>
                            </div>
                        </div>
                        <div className={classes.editApplicationCommentsTitle}>
                            Это третья строка Это третья строка Это третья строка Это третья строка
                            Это третья строка Это третья строка Это третья строка Это третья строка
                            Это третья строка Это третья строка Это третья строка
                        </div>
                    </div>
                </div>
                <div className={classes.editApplicationRightBlock}>
                    <div className={classes.editApplicationStatus}>
                        <div className={classes.editApplicationStatusIcon} style={{backgroundColor: `${statusRgb}`}}/>
                        {!editStatus ?
                            <div onClick={toggleEditStatus} className={classes.editApplicationStatusTitle}>
                                {statusName}
                                <ArrowDownIcon/>
                            </div>
                            : <Select
                                className={classes.editApplicationStatusSelect}
                                native
                                value={status}
                                onChange={handleChange}>
                                {statuses.map(item => <option value={item.id}>{item.name}</option>)}
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
                        <div>{initiatorName}</div>
                    </div>
                    <div className={classes.editApplicationMargin}>
                        <div className={classes.editApplicationHead}>
                            Исполнитель
                        </div>
                        <div>{executorName}</div>
                    </div>
                    <div className={classes.editApplicationMargin}>
                        <div className={classes.editApplicationHead}>
                            Приоритет
                        </div>
                        <div>{priorityName}</div>
                    </div>
                    <div className={classes.editApplicationMargin}>
                        <div className={classes.editApplicationHead}>
                            Скрок
                        </div>
                        <div>{resolutionDatePlan ? new Date(resolutionDatePlan) : 'Не указано'}</div>
                    </div>
                    <div className={classes.editApplicationMargin}>
                        <div className={classes.editApplicationHead}>
                            Теги
                        </div>
                        <div>{tags?.map(item =>
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