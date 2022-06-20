
import * as React from 'react';
import MonochromePhotosIcon from '@mui/icons-material/MonochromePhotos';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Input } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const ImagePixabay = () => {
    const pages = ['Sport', 'Music', 'Food'];
    const [start, setStart] = React.useState(0);
    const [screan, setScrean] = React.useState(null);
    const [showArr, setShowArr] = React.useState([]);
    const [search, setSearch] = React.useState("")
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [amount, setAmount] = React.useState(6);
    const [color, setColor] = React.useState("");
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = (e) => {
        setAnchorElNav(null);
    };
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    }));
    const handleAmount = (e) => {
        setAmount(e.target.value);
    }
    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));
    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));
    React.useEffect(() => {
        setInterval(() => {
            let rand = Math.floor(Math.random() * showArr.length);
            setStart(rand);
        }, 3000);
    }, [showArr, start, amount]);
    const fetchImage = async (quary) => {
        let colo = "";
        if (color != "")
            colo = `${color}`;
        console.log(colo);
        console.log(quary)
        console.log(search)
        await fetch(`https://pixabay.com/api/?key=14910698-da2d9192ee156a4fb851cc1c6&q=${quary}+${colo}&image_type=image&pretty=true&per_page=200`)
            .then(res => res.json())
            .then(
                (result) => {
                    let t = result;
                    let temp = [...t.hits];
                    console.log(temp)
                    setShowArr([...temp])
                    console.log(showArr)
                    return result
                },
                (error) => {
                    console.log(error)
                }
            )
    }
    const han = async (e) => { return await fetchImage(e); }
    return (
        <>
            <AppBar color="transparent" position="static"  >
                <Container maxWidth="xl">
                    <Toolbar disableGutters >
                        <MonochromePhotosIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'blue' }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'blue',
                                textDecoration: 'none',
                            }}
                        >
                            Gallery
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                onClick={handleOpenNavMenu}
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{ display: { xs: 'block', md: 'none' } }}
                            >
                                {pages.map((page, index) => (
                                    <MenuItem key={index} >
                                        <Button key={index} name={page} onClick={(e) => { han(e.target.name); handleCloseNavMenu(e) }} >{page}</Button>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <MonochromePhotosIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: 'blue' }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'blue',
                                textDecoration: 'none',
                            }}
                        >
                            Gallery
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page, index) => (
                                <Button
                                    key={page}
                                    name={page}
                                    onClick={(e) => { { han(e.target.name) }; handleCloseNavMenu(e) }}
                                    sx={{ my: 2, color: 'black', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                    <Toolbar disableGutters>
                        {/* Search image by word of write in input */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Input placeholder='Enter cateory' name='input' onChange={(e) => {
                                if (e.target.value == "")
                                    setSearch("")
                                else {
                                    console.log(e.target.value)
                                    setSearch(e.target.value)
                                    console.log(search)
                                }
                            }}>
                            </Input>
                            <Box >
                                <Button value="search" sx={{ color: "blue" }} onClick={() => { han(search) }}>Search</Button>
                            </Box>
                        </Box>
                        {/* Num of Image view But if not chosse default 6 */}
                        <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' } }}>
                            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="demo-simple-select-standard-label">Amount</InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={amount}
                                    label="amount"
                                    onChange={handleAmount}
                                >
                                    <MenuItem value="">
                                        <em>{amount}</em>
                                    </MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={5}>5</MenuItem>
                                    <MenuItem value={6}>6</MenuItem>
                                    <MenuItem value={7}>7</MenuItem>
                                    <MenuItem value={8}>8</MenuItem>
                                    <MenuItem value={9}>9</MenuItem>
                                    <MenuItem value={10}>10</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        {/*Color search */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Input placeholder='Enter color' name='input' onChange={(e) => {
                                if (e.target.value == "")
                                    setColor("")
                                else {
                                    console.log(e.target.value)
                                    setColor(e.target.value)
                                    console.log(color)
                                }
                            }}>
                            </Input>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            {(showArr.length != 0) ? <>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 6, md: 12 }}>
                    {showArr.map((value, index) => <>
                        {(index >= start && index < start + amount) ?
                            <Grid item xs={2} sm={4} md={4} key={index}>
                                <Card sx={{ maxWidth: 345, flexBasis: 10 }} key={index}>
                                    <CardActionArea >
                                        <CardMedia
                                            component="img"
                                            height="240"
                                            image={value.webformatURL}
                                            alt={value.length}
                                        />
                                        <Button  >{value.tags}</Button>
                                        <CardMedia />
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            : <></>}
                    </>
                    )}


                </Grid></> : <></>
            }
        </>
    )
}

//If you want to select image by color .
// You need to choose a color and after
// that you need to choose the search word for them.



















