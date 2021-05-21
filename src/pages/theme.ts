import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
    app: {
        '& .MuiGrid-root.MuiGrid-root': {
            padding: 0,
        }
    },
    header: {
        backgroundColor: '#D2DFED',
        height: 70,
        '& .MuiOutlinedInput-root': {
            borderRadius: 40,
        },
    },
    headerSearch: {
        backgroundColor: '#FFFFFF',
        borderRadius: 40,
        marginTop: 20,
        marginLeft: 20,
        width: 675,
        height: 40,
    },
    sideMenu: {
        position: 'sticky',
        top: 0,
        left: 0,
        backgroundColor: '#012138',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#FFFFFF',
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
        padding: 10,
        '& :hover': {
            backgroundColor: '#002B4B'
        }
    },
    sideMenuListItem: {
        cursor: 'pointer',
        textAlign: 'center',
        paddingTop: 15,
        paddingLeft: 4,
        width: 95,
        height: 55,

    },
    sideMenuListItemLabel: {
        fontSize: 12,
    },
    applicationsList: {
        paddingTop: 30,
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
        }
    },
    applicationsListHeaderId: {
        fontWeight: 600,
        paddingLeft: 50,
        paddingRight: 20,
        width: 65,
    },
    applicationsListHeaderName: {
        fontWeight: 600,
        width: 415,
    },
    applicationsListHeaderStatus: {
        fontWeight: 600,
        width: 110,
        paddingLeft: 10
    },
    applicationsListHeaderExecutor: {
        fontWeight: 600,
        width: 150,
        paddingLeft: 20
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
        width: 402,
        marginRight: 13
    },
    applicationsListStatus: {
        borderRadius: 30,
        color: '#FFFFFF',
        width: 82,
        padding: '6px 13px',
        marginLeft: 10,
    },
    applicationsListExecutor: {
        width: 155,
        paddingLeft: 15,
    },
    modalBlock: {
        height: 'calc(100vh - 58px)',
        position: 'fixed',
        top: 57,
        right: 0,
        width: '49%',
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
        paddingTop: 30,
        paddingLeft: 35,
    },
    editApplicationLeftBlock: {
        maxWidth: 700,
        width: '42vw',
    },
    editApplicationHeader: {
        color: '#9A9A9A',
        marginBottom: 15,
    },
    editApplicationDescription: {
        height: 85,
        width: '100%',
        marginBottom: 45,
        overflow: 'auto',
    },
    editApplicationAddComment: {


    },
    editApplicationAddCommentTextArea: {
        height: 75,
        padding: 5,
        width: 'calc(100% - 10px)',
        marginBottom: 25,
        overflow: 'auto',
        resize: 'none',
    },
}))