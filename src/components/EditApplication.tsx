import React from "react";
import {ModalBlock} from "./ModalBlock";
import {InItem} from "../store/ducks/listItems/contracts/state";
import {Button} from "@material-ui/core";
import {useStyles} from "../pages/theme";

interface IEditApplication {
    onClose: () => void
}


export const EditApplication: React.FC<IEditApplication & InItem> = ({onClose, id, name, description}) => {
    const classes = useStyles()


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
                        <Button variant="contained" color="primary">
                            Сохранить
                        </Button>
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
                <div>

                </div>
            </div>
        </ModalBlock>
    )
}