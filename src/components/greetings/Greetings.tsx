import { Grid } from "semantic-ui-react"
import "./Greetings.css"
import SkillIcon from "../skill-icon/SkillIcon"

const Greetings = () => {
    return <div className="greetings">
        <Grid columns={5} className="skills-container">
            <Grid.Row columns={5} className="skills-row" >
                <Grid.Column className="skill-column bottom-right">
                    <SkillIcon iconType="graphql" />
                </Grid.Column>
                <Grid.Column className="skill-column top-right">
                    <SkillIcon iconType="webpack" />
                </Grid.Column>
                <Grid.Column className="skill-column bottom-right">
                    <SkillIcon iconType="nginx" />
                </Grid.Column>
                <Grid.Column className="skill-column bottom">
                    <SkillIcon iconType="spring" />
                </Grid.Column>
                <Grid.Column className="skill-column top-left">
                    <SkillIcon iconType="python" />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={5} className="skills-row">
                <Grid.Column className="skill-column">
                    <SkillIcon iconType="react" />
                </Grid.Column>
                <Grid.Column className="skill-column bottom-left">
                    <SkillIcon iconType="redux" />
                </Grid.Column>
                <Grid.Column className="skill-column name-column">
                    Hello👋<br />I'm Manohar
                </Grid.Column>
                <Grid.Column className="skill-column top-right">
                    <SkillIcon iconType="redis" />
                </Grid.Column>
                <Grid.Column className="skill-column">
                    <SkillIcon iconType="flask" />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={5} className="skills-row">
                <Grid.Column className="skill-column top-right">
                    <SkillIcon iconType="sass" />
                </Grid.Column>
                <Grid.Column className="skill-column bottom-right">
                    <SkillIcon iconType="nodejs" />
                </Grid.Column>
                <Grid.Column className="skill-column top-right">
                    <SkillIcon iconType="twilio" />
                </Grid.Column>
                <Grid.Column className="skill-column">
                    <SkillIcon iconType="java" />
                </Grid.Column>
                <Grid.Column className="skill-column bottom-left">
                    <SkillIcon iconType="sql" />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>
}
export default Greetings