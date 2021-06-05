import makeStyles from "@material-ui/core/styles/makeStyles";

export const useApplicationListStyles = makeStyles(() => ({
    applicationsList: {
        width: 'calc(100vw + 18%)',
        paddingTop: 30,
        '& a': {
            color: '#000000',
            textDecoration: 'none',
        }
    },
    applicationsListButton: {
        marginLeft: 265,
    },
    applicationsListItem: {
        display: 'flex',
        alignItems: 'center',
        margin: 'auto',
        cursor: 'pointer',
        height: 55,
        borderBottom: '2px solid rgb(246,246,246)',
        '& div': {
            fontSize: 16,
        },
    },
    applicationsListHeaderId: {
        fontWeight: 600,
        paddingLeft: 50,
        paddingRight: 10,
        width: 65,
    },
    applicationsListHeaderName: {
        fontWeight: 600,
        width: 430,
        paddingLeft: 10,
        paddingBottom: 2,
        borderLeft: '1px solid #c4c4c4',
    },
    applicationsListHeaderStatus: {
        fontWeight: 600,
        width: 120,
        paddingLeft: 10,
        paddingBottom: 2,
        borderLeft: '1px solid #c4c4c4',
    },
    applicationsListHeaderExecutor: {
        fontWeight: 600,
        width: 150,
        paddingLeft: 10,
        paddingBottom: 2,
        borderLeft: '1px solid #c4c4c4',
    },
    applicationsListPriority: {
        width: 5,
        height: 52,
        borderRadius: 10,
        marginLeft: 3
    },
    applicationsListId: {
        paddingLeft: 31,
        paddingRight: 31,
        width: 65,
    },
    applicationsListName: {
        display: 'box',
        boxOrient: 'vertical',
        overflow: 'hidden',
        lineClamp: 2,
        width: 418,
        marginRight: 13
    },
    applicationsListStatus: {
        borderRadius: 30,
        color: '#FFFFFF',
        width: 85,
        padding: '5px 13px 7px 13px',
        marginLeft: 10,
        marginRight: 10,
        fontSize: 14,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    applicationsListExecutor: {
        width: 155,
        paddingLeft: 15,
    },
}))