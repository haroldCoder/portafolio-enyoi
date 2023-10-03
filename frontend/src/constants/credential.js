import html from '../assets/img/html.png'
import css from '../assets/img/css.png'
import js from '../assets/img/js.png'
import jquery from '../assets/img/jquery.png';
import react from '../assets/img/reactjs.png'
import next from '../assets/img/nextjs.png'
import cpp from '../assets/img/cpp.png'
import net from '../assets/img/.net-framework.png'
import java from '../assets/img/java.png'
import python from '../assets/img/python.png'
import sql from '../assets/img/sql.png'
import c from '../assets/img/c.png'; 
import node from '../assets/img/nodejs.png';
import laravel from '../assets/img/laravel.png';
import mysql from '../assets/img/mysql.png';
import postgre from '../assets/img/postgresql.png';
import mongo from '../assets/img/mongodb.png';
import supabase from '../assets/img/supabase.png';
import azure from '../assets/img/azure.png';
import google from '../assets/img/google-cloud.png';
import git from '../assets/img/git.png';
import github from '../assets/img/github.png';
import gitlab from '../assets/img/gitlab.png'; 
import selenium from '../assets/img/selenium.png';
{/* se importaran todas las imagenes, para que puedan ser utilizadas en los arreglos de objetos */ }


export const skillsSoftware = {
    frontend: [
        {
            "name": "HTML5",
            "cover": html,
            "type": "fullstack",
            "progress": 90
        },
        {
            "name": "CSS3",
            "cover": css,
            "type": "fullstack",
            "progress": 90
        },
        {
            "name": "JAVASCRIPT",
            "cover": js,
            "type": "fullstack",
            "progress": 85
        },
        {
            "name": "JQUERY",
            "cover": jquery,
            "type": "fullstack",
            "progress": 100
        },
        {
            "name": "REACTJS & React Native",
            "cover": react,
            "type": "fullstack",
            "progress": 80
        },
        {
            "name": "NEXTJS",
            "cover": next,
            "type": "fullstack",
            "progress": 60
        },
    ],
    backend: [
        {
            "name": ".NET FRAMEWORK(core)",
            "cover": net,
            "type": "fullstack",
            "progress": 60
        }, 
        {
            "name": "NODEJS & EXPRESSJS",
            "cover": node,
            "type": "fullstack",
            "progress": 80
        },
        {
            "name": "LARAVEL",
            "cover": laravel,
            "type": "fullstack",
            "progress": 20
        }
    ],
    dbrelacional: [
        {
            "name": "MYSQL",
            "cover": mysql,
            "type": "fullstack",
            "progress": 90
        },
        {
            "name": "POSTGRESQL",
            "cover": postgre,
            "type": "fullstack",
            "progress": 80
        },
    ],
    dbnorelacional: [
        {
            "name": "MONGODB",
            "cover": mongo,
            "type": "fullstack",
            "progress": 60
        },
        {
            "name": "SUPABASE",
            "cover": supabase,
            "type": "fullstack",
            "progress": 80
        }
    ],
    cloud: [
        {
            "name": "AZURE",
            "cover": azure,
            "type": "fullstack",
            "progress": 20
        },
        {
            "name": "GOOGLE CLOUD",
            "cover": google,
            "type": "fullstack",
            "progress": 40
        }
    ],
    version: [
        {
            "name": "GIT",
            "cover": git,
            "type": "fullstack",
            "progress": 90
        },
        {
            "name": "GITHUB",
            "cover": github,
            "type": "fullstack",
            "progress": 90
        },
        {
            "name": "GITLAB",
            "cover": gitlab,
            "type": "fullstack",
            "progress": 90
        }
    ],
    auto: [
        {
            "name": "SELENIUM & JAVA",
            "cover": selenium,
            "type": "fullstack",
            "progress": 70
        }
    ],
    others: [
        {
            "name": "C++",
            "cover": cpp,
            "type": "programming",
            "progress": 60
        },
        {
            "name": "JAVA",
            "cover": java,
            "type": "programming",
            "progress": 40
        },
        {
            "name": "C",
            "cover": c,
            "type": "programming",
            "progress": 50
        },
        {
            "name": "PYTHON3",
            "cover": python,
            "type": "programming",
            "progress": 70
        }
    ]
}; {/* se creara un objeto que contenga todos los demas objetos que a su vez.
   contendra un array con otros objetos que contendran los distintos atributos de la habilidad respectivos */}