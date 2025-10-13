import React from 'react'
import { Link } from 'react-scroll'
import { Sun, Moon } from 'react-feather'


export default function Navbar(){
const [theme, setTheme] = React.useState('light')


React.useEffect(()=>{
if(theme === 'dark') document.documentElement.classList.add('dark')
else document.documentElement.classList.remove('dark')
},[theme])


return (
<header className="fixed w-full z-40 top-0 left-0">
<nav className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between backdrop-blur-md">
<div className="text-lg font-semibold">Nate Garza</div>
<div className="flex items-center gap-6">
<div className="hidden md:flex gap-4">
<Link to="home" smooth={true} offset={-80} className="cursor-pointer">Home</Link>
<Link to="about" smooth={true} offset={-80} className="cursor-pointer">About</Link>
<Link to="projects" smooth={true} offset={-80} className="cursor-pointer">Projects</Link>
<Link to="skills" smooth={true} offset={-80} className="cursor-pointer">Skills</Link>
<Link to="contact" smooth={true} offset={-80} className="cursor-pointer">Contact</Link>
</div>
<button onClick={()=>setTheme(t=> t==='light' ? 'dark' : 'light') } className="p-2 rounded-full border">
{theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
</button>
</div>
</nav>
</header>
)
}