import makeStyles from "@material-ui/core/styles/makeStyles";

export const useEditStyles = makeStyles((theme) => ({
    editApplication: {
        display: 'flex',
        width: 'calc(100vw - 55%)',
    },
    editApplicationLeftBlock: {
        paddingTop: 30,
        paddingLeft: 35,
        paddingRight: 40,
        height: 'calc(100vh - 140px)',
        width: 'calc(100vw - 941px)',
        borderRight: '1px solid rgb(117,117,117, .5)'
    },
    editApplicationHeader: {
        color: '#9A9A9A',
        marginBottom: 15,
    },
    editApplicationDescription: {
        height: 85,
        width: '100%',
        maxWidth: 655,
        marginBottom: 45,
        overflow: 'auto',
    },
    editApplicationAddCommentTextArea: {
        height: 75,
        padding: 5,
        width: '100%',
        maxWidth: 655,
        marginBottom: 25,
        overflow: 'auto',
        resize: 'none',
        border: 'none',
        backgroundColor: 'inherit'
    },
    editApplicationComments: {
        maxWidth: 700,
        maxHeight: 'calc(100vh - 510px)',
        overflow: 'auto',
        marginTop: '7px'
    },
    editApplicationCommentItems: {
        marginTop: 43,
    },
    editApplicationCommentsHeader: {
        display: 'flex',
        marginBottom: 17,
    },
    editApplicationCommentsAvatar: {
        backgroundColor: '#FAFBFC',
        border: '1px solid #9A9A9A',
        borderRadius: 30,
        height: 40,
        width: 40,
        marginRight: 10,
    },
    editApplicationCommentsAuthor: {
        marginTop: 10,
        marginBottom: 5,
    },
    editApplicationCommentsTime: {
        fontSize: 12
    },
    editApplicationCommentsTitle: {
        backgroundColor: '#E3E9F5',
        maxWidth: 600,
        padding: '8px 10px',
        borderRadius: 8,
        marginLeft: 50,
    },
    editApplicationRightBlock: {
        fontSize: 14,
        padding: 30,
        width: 175,
        height: 'calc(100vh - 140px)',
    },
    editApplicationStatus: {
        display: 'flex',
        marginTop: 5,
        marginBottom: 50,
        maxHeight: 43,
        "& select": {
            borderRadius: 10,
        }
    },
    editApplicationStatusSelect: {
        position: 'relative',
        top: -4,
        left: 9,
        maxWidth: 119,
        padding: 2,
        border: 'none',
        outline: 'none',
        backgroundColor: '#EBF3F6',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    editApplicationStatusIcon: {
        borderRadius: 20,
        height: 10,
        width: 10,
    },
    editApplicationHead: {
        color: '#9A9A9A',
        marginBottom: 5,
    },
    editApplicationExecutorSelect: {
        color: 'rgb(26, 145, 218)',
        padding: 2,
        border: 'none',
        outline: 'none',
        backgroundColor: '#EBF3F6',
    },
    editApplicationMargin: {
        marginBottom: 40
    },
    editApplicationTags: {
        display: 'inline-flex',
        padding: '0 6px 1px 6px',
        height: 20,
        color: '#9A9A9A',
        backgroundColor: '#FFFFFF',
        marginBottom: 8,
        marginLeft: 5,
        border: '1px solid rgb(130, 130, 130, 0.7)',
        borderRadius: 10
    },
}))