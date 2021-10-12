import React from "react";
import './Articles.scss';
import { withRouter } from "react-router-dom"

class Articles extends React.Component {
    handleViewsDetail = (user) => {
        this.props.history.push(`/details/${user.id}`)
    }
    render() {
        let { arrBox } = this.props;
        return (
            <div className="articles-containter">
                {arrBox && arrBox.length &&
                    arrBox.map((item, index) => {
                        return (
                            <div className="box-articles" key={item.id}>
                                {item.type && item.type === "link" &&
                                    <h3 className="box-title">
                                        <span>○&nbsp;</span>
                                        <a onClick={() => this.handleViewsDetail(item)}>
                                            {item.title}
                                        </a>
                                    </h3>
                                }
                                {item.type && item.type === "locked" &&
                                    <h3 className="box-title">
                                        <span>🔒&nbsp;</span>
                                        {item.title}
                                    </h3>
                                }
                                {item.type && item.type === "draft" &&
                                    <h3 className="box-title">
                                        <span>✎&nbsp;</span>
                                        {item.title}
                                    </h3>
                                }
                                {item.time &&
                                    <p className="box-time">🕦  {item.time}</p>
                                }
                                {item.description &&
                                    <p className="box-description">{item.description}</p>
                                }
                                {
                                    item.arrTag && item.arrTag.length &&
                                    <ul>
                                        <li>#</li>
                                        {
                                            item.arrTag.map((itemTag, index) => {
                                                return (
                                                    <li key={itemTag}><a href={"?tag=" + itemTag} >{itemTag}</a></li>
                                                )
                                            })
                                        }
                                    </ul>
                                }

                            </div>
                        )
                    })
                }

            </div>
        )
    }
}
export default withRouter(Articles);