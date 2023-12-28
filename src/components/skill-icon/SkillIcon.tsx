import FlaskIcon from "../../assets/skills/flask.svg"
import GraphQlIcon from "../../assets/skills/graphql.svg"
import PythonIcon from "../../assets/skills/python.svg"
import ReactIcon from "../../assets/skills/react.svg"
import SassIcon from "../../assets/skills/sass.svg"
import JavaIcon from "../../assets/skills/java.svg"
import NginxIcon from "../../assets/skills/nginx.svg"
import NodeIcon from "../../assets/skills/node.svg"
import RedisIcon from "../../assets/skills/redis.svg"
import ReduxIcon from "../../assets/skills/redux.svg"
import SpringIcon from "../../assets/skills/spring.svg"
import SqlIcon from "../../assets/skills/sql.svg"
import TwilioIcon from "../../assets/skills/twilio.svg"
import WebpackIcon from "../../assets/skills/webpack.svg"
import "./SkillIcon.css"
import { Popup } from "semantic-ui-react"

type iconType = "react" | "sass" | "graphql" | "webpack" | "redux" | "nodejs" | "nginx" | "twilio" | "redis" | "spring" | "java" | "python" | "flask" | "sql"
const SkillIcon = ({ iconType }: {
    iconType: iconType
}) => {
    const getIcon = () => {
        switch (iconType) {
            case "react":
                return ReactIcon
            case "graphql":
                return GraphQlIcon
            case "sass":
                return SassIcon
            case "flask":
                return FlaskIcon
            case "python":
                return PythonIcon
            case "java":
                return JavaIcon
            case "nginx":
                return NginxIcon
            case "nodejs":
                return NodeIcon
            case "redis":
                return RedisIcon
            case "redux":
                return ReduxIcon
            case "spring":
                return SpringIcon
            case "sql":
                return SqlIcon
            case "twilio":
                return TwilioIcon
            case "webpack":
                return WebpackIcon
            default:
                return ""
        }
    }

    return <>
        <Popup
            trigger={<img className={`skill-icon ${iconType}`} src={getIcon()} alt="" />}
            content="Content coming soon! 😎"
            on={["hover", "click"]}
            hideOnScroll
            className="skillPopup"
            inverted
        />

    </>
}

export default SkillIcon