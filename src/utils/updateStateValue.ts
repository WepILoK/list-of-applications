export enum EnumStateType {
    NAME = 'name',
    DESCRIPTION = 'description',
    STATUS = 'status',
    EXECUTOR = 'executor'
}

export const updateStateValue = (value: string, type: EnumStateType) => {
    let updateValue
    if (type === EnumStateType.NAME) {
        updateValue = {name: value}
    } else if (type === EnumStateType.DESCRIPTION) {
        updateValue = {description: value}
    } else if (type === EnumStateType.STATUS) {
        updateValue = {statusId: Number(value)}
    } else if (type === EnumStateType.EXECUTOR) {
        updateValue = {executorId: Number(value)}
    }
    return updateValue
}