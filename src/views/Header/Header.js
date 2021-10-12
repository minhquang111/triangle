import React from "react";
import './Header.scss';

class Header extends React.Component {
    render() {
        return (
            <div className="header-container">
                <h1 className="box-logo">⧋</h1>
                <p className="box-span-logo">triangle</p>
                <h1 className="box-title">Chào mừng tới với blog của @te.ng</h1>
                <p className="box-content">
                    Nơi chia sẽ kiến thức về các lĩnh vực cuộc sống và đam mê viết lách. Dạo vào vòng và xem tui có gì cho các bạn nhé!! <a href="#" className="fb-user">đây là FB cá nhân :D</a>.
                    <br />
                    <code>Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program. - Linus Torvalds</code>
                </p>
            </div>
        )
    }
}
export default Header;