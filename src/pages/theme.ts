import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
    app: {
        display: 'flex',
        '& .MuiGrid-root.MuiGrid-root': {
            padding: 0,
        }
    },
    header: {
        backgroundColor: '#D2DFED',
        height: 65,
        width: '100vw',
        '& .MuiOutlinedInput-root': {
            borderRadius: 40,
        },
    },
    pageTitle: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 500,
        marginTop: 30,
    },
    headerSearch: {
        backgroundColor: '#FFFFFF',
        borderRadius: 40,
        marginTop: 15,
        marginLeft: 20,
        width: 675,
        height: 40,
    },
    sideMenu: {
        position: 'sticky',
        width: 96,
        top: 0,
        left: 0,
        backgroundColor: '#012138',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    sideMenuLogo: {
        width: 96,
        height: 64,
        paddingTop: 18,
        position: 'relative',
        left: 26,
        top: 10,
    },
    sideMenuList: {
        paddingTop: 10,
        '& :hover': {
            backgroundColor: '#002B4B'
        },
        '& a': {
            color: '#FFFFFF',
            textDecoration: 'none',
        }
    },
    sideMenuListItem: {
        cursor: 'pointer',
        textAlign: 'center',
        paddingTop: 15,
        width: 95,
        height: 55,
    },
    sideMenuListItemLabel: {
        fontSize: 12,
    },
    applicationsList: {
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
    modalBlock: {
        height: 'calc(100vh - 65px)',
        width: 'calc(99vw - 645px)',
        position: 'fixed',
        top: 65,
        right: 0,
        border: '1px solid rgb(117,117,117, .5)'
    },
    modalBlockHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#1A4879',
        height: 60,
        width: '100%',
        color: '#FFFFFF',
    },
    modalBlockHeaderTitle: {
        paddingLeft: 35,
        fontSize: 18,
        fontWeight: 600,
    },
    modalBlockHeaderTitleName: {
        display: 'box',
        lineClamp: 2,
        overflow: 'hidden',
        boxOrient: 'vertical',
        position: 'absolute',
        top: 12,
        left: 130,
        maxWidth: 510,
        flexBasis: 510,
        height: 35,
        paddingLeft: 25,
        fontSize: 14,
    },
    modalBlockContent: {
        height: 'calc(100vh - 60px)',
        backgroundColor: '#EBF3F6',
    },
    createApplicationForm: {
        paddingTop: 60,
        paddingLeft: 40,
        color: '#9A9A9A',
    },
    createApplicationFormName: {
        resize: 'none',
        marginTop: 16,
        marginRight: 85,
        marginBottom: 25,
        padding: 10,
        height: 65,
        maxWidth: 630,
        width: '42vw',
        borderRadius: 5,
        borderColor: '#B5BBBF',
        outline: 'none',
    },
    createApplicationFormDescription: {
        resize: 'none',
        marginTop: 16,
        marginRight: 85,
        marginBottom: 75,
        padding: 10,
        height: 110,
        width: '42vw',
        maxWidth: 630,
        borderRadius: 5,
        borderColor: '#B5BBBF',
        outline: 'none',
    },
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
        overflow: 'auto'
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
    editApplicationStatusTitle: {
        display: 'flex',
        justifyContent: 'space-between',
        position: 'relative',
        top: -9,
        left: 9,
        padding: '3px 3px 2px 7px',
        color: '#9A9A9A',
        fontWeight: 600,
        maxWidth: 115,
        cursor: 'pointer',
        maxHeight: 43,
        '&:hover': {
            borderRadius: 10,
            backgroundColor: '#c7e4ef',
        }
    },
    editApplicationStatusSelect: {
        position: 'relative',
        top: -4,
        left: 9,
        maxWidth: 110,
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
    editApplicationExecutor: {
        display: 'flex',
        color: 'rgb(26, 145, 218)',
        width: 140,
        padding: '1px 0px 0px 9px ',
        '&:hover': {
            borderRadius: 10,
            backgroundColor: '#c7e4ef',
        }
    },
    editApplicationExecutorSelect: {
        position: 'relative',
        top: 2,
        left: 5,
        maxWidth: 110,
        borderRadius: 10,
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