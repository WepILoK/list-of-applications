import React, {useEffect} from "react";
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";

import {useEditStyles} from "./style";

import {ModalBlock} from "../ModalBlock";
import {EditLeftBlock} from "./EditLeftBlock";
import {EditRightBlock} from "./EditRightBlock";
import {selectItem} from "../../../../store/ducks/listItems/selectors";
import {setDefaultItem} from "../../../../store/ducks/listItems/actionCreators";


export const EditApplication: React.FC = React.memo(() => {
    const classes = useEditStyles()
    const item = useSelector(selectItem)
    const dispatch = useDispatch()
    const params: { id: string } = useParams();

    const itemId = Number(params.id)

    useEffect(() => {
        return () => {
            dispatch(setDefaultItem())
        }
    }, [])

    if (item.id === itemId) {
        return (
            <ModalBlock title={`№ ${item.id}`} name={item.name}>
                <div className={classes.editApplication}>
                    <EditLeftBlock item={item}/>
                    <EditRightBlock item={item}/>
                </div>
            </ModalBlock>
        )
    }
    return null
})