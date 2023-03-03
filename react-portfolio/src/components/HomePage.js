import React from 'react'
import { Button } from 'react-bootstrap';
import reactImage from "../Images/react.png";
import jsImage from "../Images/js.png";
import profileImage from "../Images/avatar.png";

const HomePage = () => {
    return (
        <div className="container text-center">
            <img src={profileImage} className="profileImage" />
            <h2>Daisuke Katayama</h2>
            <p class="myself">
            同志社大学大学院の修士1年生です。専攻は情報工学です。ネットワーク情報システム研究室に所属してクラウドコンピューティンを勉強しています。
            </p>
            <p class="myself">このサイトはReactの勉強で作成しました。分からないこともまだありますが、新しいことを学ぶのは楽しい！</p>

            <section id="skill">
                <div class="text-center">
                    <br/>
                    <h2 class="title">当サイトの構成</h2>
                    <div class="row text-center">
                        <div class="col-md-6 services">
                            <img src={reactImage} />
                            <h4>React</h4>
                            <p>Reactの勉強を兼ねて作成しました。まだ分からないこともありますが、少しずつ改良してきます！</p>
                        </div>
                        <div class="col-md-6 services">
                            <img src={jsImage} />
                            <h4>HTML/CSS</h4>
                            <p>フレームワークとしてBootstrapを利用しています。インターンでも利用しているので、かなり腑に落ちてきました！たのしい！！！</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage
