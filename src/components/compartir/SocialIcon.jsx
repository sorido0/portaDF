




import "./socialIcon.scss";


export const SocialIcon = ({ icono, color, link }) => {
  return (
    <div 
        className="social-icon"
        style={{ color: color }}
        onClick={() => window.open(link, "_blank")}
    >
        {icono}
    </div>
  )
}
