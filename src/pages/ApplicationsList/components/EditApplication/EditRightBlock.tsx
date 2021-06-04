import React, {useState} from 'react';
import {selectById} from "../../../../utils/selectById";
import format from "date-fns/format";
import ruLang from "date-fns/locale/ru";
import {useDispatch, useSelector} from "react-redux";
import {selectStatuses, selectUsers} from "../../../../store/ducks/listItems/selectors";
import {useEditStyles} from "./theme";
import {Api} from "../../../../api/api";
import {updateItem} from "../../../../store/ducks/listItems/actionCreators";
import {InItem} from "../../../../store/ducks/listItems/contracts/state";

interface IEditApplicationRightBlock {
    item: InItem
}

export const EditRightBlock: React.FC<IEditApplicationRightBlock> = ({item}) => {
    const statuses = useSelector(selectStatuses)
    const users = useSelector(selectUsers)
    const dispatch = useDispatch()

    const classes = useEditStyles()

    const [status, setStatus] = useState({
        name: item?.statusName, id: item?.statusId
    })
    const [executor, setExecutor] = useState({
        name: item?.executorName, id: item?.executorId
    })

    const handleChangeStatus = async (event: React.ChangeEvent<{ value: string }>) => {
        let value = (event.target.value.substring(0, 5) + "," + event.target.value.substring(5)).split(",")
        const id = Number(value[0])
        const itemData = await Api.fetchItem(item.id)
        dispatch(updateItem({
            id: item.id,
            comment: '',
            statusId: id,
            executorId: itemData.executorId
        }))
        setStatus(prevState => {
            return {...prevState, id: id, name: value[1]}
        });
    };

    const handleChangeExecutor = async (event: React.ChangeEvent<{ value: string }>) => {
        let value = (event.target.value.substring(0, 5) + "," + event.target.value.substring(5)).split(",")
        const id = Number(value[0])
        const itemData = await Api.fetchItem(item.id)
        dispatch(updateItem({
            id: item.id,
            comment: '',
            statusId: itemData.statusId,
            executorId: id
        }))
        setExecutor(prevState => {
            return {...prevState, id: id, name: value[1] }
        })
    };

    return (
        <div className={classes.editApplicationRightBlock}>
            <div className={classes.editApplicationStatus}>
                <div className={classes.editApplicationStatusIcon}
                     style={{backgroundColor: `${selectById(status.id, statuses).rgb}`}}/>
                <select
                    className={classes.editApplicationStatusSelect}
                    onChange={handleChangeStatus}>
                    {statuses.map(obj =>
                        <option selected={obj.id === item?.statusId} key={obj.id} value={obj.id + obj.name}>
                            {obj.name}
                        </option>)}
                </select>
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
                <select
                    className={classes.editApplicationExecutorSelect}
                    onChange={handleChangeExecutor}>
                    {users.map(obj =>
                        <option selected={obj.id === item?.executorId} key={obj.id} value={obj.id + obj.name}>
                            {obj.name}
                        </option>)}
                </select>
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

    );
};
