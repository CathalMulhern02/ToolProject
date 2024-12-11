import ToolItem from "./toolitem";

const Tools = (props) => {
    return props.myTools.map(
        (tool) => {
            return <ToolItem mytool={tool} key={tool._id} Reload={props.ReloadData} />;
        }
    );
}

export default Tools;