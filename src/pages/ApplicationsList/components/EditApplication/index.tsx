import React, {useEffect} from "react";
import {useHistory, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";

import {useEditStyles} from "./theme";

import {ModalBlock} from "../ModalBlock";
import {selectItem} from "../../../../store/ducks/listItems/selectors";
import {fetchItem} from "../../../../store/ducks/listItems/actionCreators";

import {EditLeftBlock} from "./EditLeftBlock";
import {EditRightBlock} from "./EditRightBlock";


export const EditApplication: React.FC = () => {
    const item = useSelector(selectItem)
    const classes = useEditStyles()

    const dispatch = useDispatch()
    const history = useHistory()
    const params: { id: string } = useParams();
    const itemId = Number(params.id)

    useEffect(() => {
        dispatch(fetchItem(itemId))
        history.push(`/applications/edit/${item?.id}`)
    }, [itemId])


    if (item?.id === itemId) {
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
}