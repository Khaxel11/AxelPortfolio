import './tooling.scss'

const Tooling = () => {
  const Web = "#960000";
  const Language = "#008496";
  const Movil = "#dd0bba";
  const database = "#00965c";
  const other = "#cfdd0b";

  const items = [
  {icon: "/tools/angular.svg", value: "Angular", color: Web}, 
  {icon: "/tools/react.svg", value: "React", color: Web},
  {icon: "/tools/html.svg", value: "HTML", color: Web},
  {icon: "/tools/css.svg", value: "CSS / SCSS", color: Web},
  {icon: "/tools/bootstrap.svg", value: "Bootstrap", color: Web},
  {icon: "/tools/csharp.svg", value: "C#", color: Language},
  {icon: "/tools/csharp.svg", value: ".NET", color: Language},
  {icon: "/tools/typescript.svg", value: "TypeScript", color:  Language},
  {icon: "/tools/javascript.svg", value: "JavaScript", color: Language},
  {icon: "/tools/java.svg", value: "Java", color: Language},
  {icon: "/tools/react.svg", value: "VisualBasic", color: Language},
  {icon: "/tools/react.svg", value: "SQL Server / T-SQL", color : database},
  {icon: "/tools/mysql.svg", value: "MySQL", color : database},
  {icon: "/tools/react.svg", value: "MongoDB", color : database},
  {icon: "/tools/firebase.svg", value: "Firebase", color : database},
  {icon: "/tools/ionic.svg", value: "Ionic", color: Movil},
  {icon: "/tools/android.svg", value: "Android Java", color: Movil},
  {icon: "/tools/github.svg", value: "GitHub", color: Movil},
  
];
  return (
    <div className="tooling">
        <div className="textContainer">
            <span>Tooling</span>
        </div>
        <div className="gridContainer">
            {items.map((item) => (
            <div className='boxTool' href={`#${item}`} key={item} style={{borderColor: item.color,}} >
                    <img src={`${item.icon}`} alt="" />

              <span>{item.value}</span>
            </div>
          ))}

        </div>
    </div>
  )
}

export default Tooling