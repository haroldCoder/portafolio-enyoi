import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search'; //utilizamos los icones de material UI
import { Link, Navigate } from "react-router-dom"; // utilizamos Link de react-router-dom para navegar entre las diferentes paginas
import Mode from './Mode';
import { Button } from '@mui/material';
import SearchSystem from './SearchSystem';


export default function Navbar(props) {

    const [text, setText] = React.useState(['Inicio', 'Proyectos', 'Tecnologias', 'Redes Sociales', 'Contactame', "Login"]); // creamos un estado para controlar las diferentes paginas por las que el usuario puede navegar
    const [open, setOpen] = React.useState(true);
    const [search, setSearch] = React.useState(false);
    const searchRef = React.useRef(null);

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
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
    React.useMemo((e)=>{
      document.addEventListener('click', (ev)=>{
        if(!document.querySelector(".search").contains(document.getElementById(ev.target.id))){
          setSearch(false)
        }
      });
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };


    }, [searchRef])
    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
            },
        },
    })); //codigos de Material UI para estilizar el navbar

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className='sm:p-3' style={{background: `${props.mode ? '#000' : '#1774ff'}`}} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={(e)=>{setOpen(!open)}}
          >
            <MenuIcon />
          </IconButton>
          <div className={`flex nav justify-between w-[100%] ${open ? 'pr-16 w-[40%]' : null}`} style={{transition: "0.6s ease"}}> {/* si la prop de app.js, open es igual a true el padding izquierdo sera de 16.em y el width sera el 40% del tamaño total */}
            {open == false ? props.nav : text.map(e=>(
              e != "Redes Sociales" ?
                <Link onClick={()=>{setOpen(false), props.setSocial(false)}} className={`${props.mode ? 'hover:text-gray-500' : 'hover:text-slate-800'}`} to={`${e == "Inicio" ? "/" : "/"+e}`}>{e}</Link> 
                : <Link to='/'><button className={`rounded-md px-2 ${props.mode ? 'hover:bg-blue-600 ' : 'hover:bg-slate-800'}`} onClick={()=>{props.setSocial(true)}}>{e}</button></Link>
            ))} { /* si open es igual a false se tomara el prop-nav el cual es un estado que se modificara en cada vista, de lo contrario se va a mostrar todas las rutas de navegacion */ }
            {/* si e no es igual a Redes sociales entonces solo se pondra un link, en donde si e == inicio entonces solo se va a poner la navegacion para la principal, en caso contrario se dejara normal */ }
          </div>
          <div>
            <Search ref={searchRef} className='search' onClick={()=>{setSearch(true)}}>
                <SearchIconWrapper id='icon'>
                  <SearchIcon  />
                </SearchIconWrapper>
                <StyledInputBase 
                id='input'
                  placeholder="Buscar…"
                  inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
            {
              search ? <SearchSystem/> : null
            }
            
          </div>
          <Button onClick={()=>{props.setMode(!props.mode)}}>
              <Mode mode={props.mode} />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}