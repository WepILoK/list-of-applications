import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import format from "date-fns/format";
import ruLang from "date-fns/locale/ru";

import {useEditStyles} from "./style";

import {Button} from "@material-ui/core";

import {updateItem} from "../../../../store/ducks/listItems/actionCreators";
import {InItem} from "../../../../store/ducks/listItems/contracts/state";


interface IEditLeftBlock {
    item: InItem
}

export const EditLeftBlock: React.FC<IEditLeftBlock> = React.memo(({item}) => {
    const classes = useEditStyles()
    const dispatch = useDispatch()
    const [text, setText] = useState<string>('')

    const updateData = () => {
        dispatch(updateItem({
            id: item.id,
            comment: text,
            statusId: item.statusId,
            executorId: item.executorId
        }))
        setText('')
    }

    const handleChangeTextarea = (e: React.FormEvent<HTMLTextAreaElement>): void => {
        if (e.currentTarget) {
            setText(e.currentTarget.value)
        }
    }

    return (
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
                {item.lifetimeItems && item.lifetimeItems.filter(obj => obj.comment).map(obj =>
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
    );
})
