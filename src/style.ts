import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles(() => ({
    app: {
        display: 'flex',
        '& .MuiGrid-root.MuiGrid-root': {
            padding: 0,
        }
    },
    content: {
        width: '100%'
    },
    pageTitle: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 500,
        marginTop: 30,
    },
}))