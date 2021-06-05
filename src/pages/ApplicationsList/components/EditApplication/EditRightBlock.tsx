import React, {useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import format from "date-fns/format";
import ruLang from "date-fns/locale/ru";

import {useEditStyles} from "./style";

import {EnumStateType, updateStateValue} from "../../../../utils/updateStateValue";
import {selectById} from "../../../../utils/selectById";
import {selectStatuses, selectUsers} from "../../../../store/ducks/listItems/selectors";
import {updateItem} from "../../../../store/ducks/listItems/actionCreators";
import {InItem} from "../../../../store/ducks/listItems/contracts/state";


interface IEditApplicationRightBlock {
    item: InItem
}

export const EditRightBlock: React.FC<IEditApplicationRightBlock> = React.memo(({item}) => {
    const classes = useEditStyles()
    const statuses = useSelector(selectStatuses)
    const users = useSelector(selectUsers)
    const dispatch = useDispatch()

    const [selectedValues, setSelectedValues] = useState({
        statusId: item.statusId, executorId: item.executorId
    })

    const statusRgb = useMemo(() => {
        return selectById(selectedValues.statusId, statuses)
    }, [selectedValues.statusId])

    const handleChangeSelectedValue = (event: React.ChangeEvent<{ value: string }>, type: EnumStateType): void => {
        const updateSelectedValue = updateStateValue(event.target.value, type)
        setSelectedValues(prevState => ({...prevState, ...updateSelectedValue}))
    }

    useEffect(() => {
        if (item.statusId !== selectedValues.statusId || item.executorId !== selectedValues.executorId) {
            dispatch(updateItem({
                id: item.id,
                comment: '',
                statusId: selectedValues.statusId,
                executorId: selectedValues.executorId
            }))
        }
    }, [selectedValues])

    return (
        <div className={classes.editApplicationRightBlock}>
            <div className={classes.editApplicationStatus}>
                <div className={classes.editApplicationStatusIcon}
                     style={{backgroundColor: `${statusRgb}`}}/>
                <select
                    className={classes.editApplicationStatusSelect}
                    onChange={(event) => handleChangeSelectedValue(event, EnumStateType.STATUS)}>
                    {statuses.map(obj =>
                        <option selected={obj.id === selectedValues.statusId} key={obj.id} value={obj.id}>
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
                    onChange={(event) => handleChangeSelectedValue(event, EnumStateType.EXECUTOR)}>
                    {users.map(obj =>
                        <option selected={obj.id === selectedValues.executorId} key={obj.id} value={obj.id}>
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
})
