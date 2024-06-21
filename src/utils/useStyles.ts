import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        backgroundColor: 'rgb(26, 26, 26)', // Темный фон, совпадающий с партиклами
        minHeight: '100vh', // Обеспечение покрытия всего экрана
        color: '#ffffff', // Белый текст
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: '#1e1e1e', // Темно-серый для панели приложения
        color: '#ffffff', // Белый текст
    },
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
        backgroundColor: '#1e1e1e', // Темно-серый для боковой панели
        color: '#ffffff', // Белый текст
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        backgroundColor: 'rgb(26, 26, 26)', // Темный фон для контента
    },
    toolbar: theme.mixins.toolbar,
    footer: {
        padding: theme.spacing(3),
        marginTop: 'auto',
        backgroundColor: '#1e1e1e', // Темно-серый для футера
        color: '#ffffff', // Белый текст
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        maxWidth: '400px',
        margin: 'auto',
        padding: '16px',
        border: '1px solid #444', // Темный цвет границы
        borderRadius: '8px',
        backgroundColor: '#ffffff', // Белый фон для формы
        color: '#000000', // Черный текст
        [theme.breakpoints.down('sm')]: {
            width: 'calc(100% - 30px)', // Ширина формы с отступами по бокам на маленьких экранах
            margin: 'auto',
        },
    },
    button: {
        margin: theme.spacing(1),
        backgroundColor: '#1e1e1e', // Темно-серый для кнопки
        color: '#ffffff', // Белый текст
        '&:hover': {
            backgroundColor: '#333333', // Более темный серый при наведении
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%', // Ширина кнопки на всю ширину формы
            maxWidth: '200px', // Ограничение максимальной ширины кнопки на маленьких экранах
            alignSelf: 'center', // Центрирование кнопки на маленьких экранах
        }
    },
    filterButtons: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        margin: '10px 0',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'row', // Горизонтальное расположение кнопок на маленьких экранах
            flexWrap: 'nowrap', // Без переноса кнопок на маленьких экранах
        },
    },
    list: {
        backgroundColor: '#8bb9dd', // Светлый цвет для списка
        color: '#000000', // Черный текст
    },
    listItem: {
        borderBottom: '1px solid #ccc', // Светлый цвет границы для элементов списка
    }
}));
