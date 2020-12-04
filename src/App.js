import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/modern">Modern</Link>
                        </li>
                        <li>
                            <Link to="/postmodern">Postmodern</Link>
                        </li>
                        <li>
                            <Link to="/metamodern">Metamodern</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/modern">
                        <Modern />
                    </Route>
                    <Route path="/postmodern">
                        <Postmodern />
                    </Route>
                    <Route path="/metamodern">
                        <Metamodern />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
                <nav>
                    <h5>Автор: Степан Филиппов, <a href="mailto:stef-2020@yandex.ru">stef-2020@yandex.ru</a></h5>
                    <button><a href="#top">вверх</a></button>
                </nav>
            </div>
        </Router>
    );
}

function Home() {
    return (
        <div>
            <h2>Слои иронии</h2>
            <img src="https://sun9-65.userapi.com/impf/WkT41PnaXbPZgy8_yBWizhHzq5tREFfj3BuH_g/QJNZbzO6aXQ.jpg?size=900x772&quality=96&proxy=1&sign=b9fc798488204ce4f579849ca29044fc" />
            <h4>
                Добро пожаловать на какой-то сайт. Дизайн сайта делал мой кот... На этом сайте я хотел бы поведать вам о различии в
                структуре мемов. Мемы условно можно разделить на несколько типов: пре-иронический, иронический, пост-иронический и
                мета-иронический. Рассказывать про пре-иронический мем я вам не буду, потому что это и не мем вовсе. А подробнее об
                остальных типах вы можете ознакомится в верхнем меню.
            </h4>
        </div>
    );
}

function Modern() {
    return (
        <div>
            <h2>Модерн</h2>
            <img src="https://sun9-37.userapi.com/5vmYUg091xukiAnudfOtYJRbpGQDfh8iENu8xA/jFC5kUaXgPk.jpg" />
            <h4>
                Не ведёт себя как исходный мем. Субверсия нарратива - основа шутки. Ирония — сатирический приём,
                в котором истинный смысл скрыт или противоречит явному смыслу; вид тропа: выражающее насмешку лукавое
                иносказание, когда в контексте речи слова употребляются в смысле, противоположном их буквальному значению.
                При этом обозначаемый с помощью иронии объект высмеивается, ставится под сомнение, сатирически
                разоблачается и отрицается под маской похвалы и одобрения.
            </h4>
        </div>
    )
}

function Postmodern() {
    return (
        <div>
            <h2>Постмодерн</h2>
            <img src="https://sun9-57.userapi.com/impf/Sb2fRTXn_ANyIJb8A3axkgL2pyUYAz1e5vsFyg/zDRzWMzi3kM.jpg?size=1121x1079&quality=96&proxy=1&sign=a6c33041738b03baff5700c29fff0c28" />
            <img src="https://sun9-29.userapi.com/impf/sCOVYgv6ZHAlAmPXdFCqAbb8ZpXJvecc3-hykg/zRA4qkbYEOI.jpg?size=959x554&quality=96&proxy=1&sign=188805038285e0fb05a388c6d0f293d8" />
            <h4>
                Ведёт себя как мем. Не выглядит как мем. Постирония  ― сатирический приём, в котором искренность становится
                трудно отличить от иронии. Иногда этот же термин может использоваться и в ином значении: переход от иронии к
                серьёзности, что делает постиронию схожей с концепцией «новой искренности», что, однако, не совсем верно.
            </h4>
        </div>
    )
}

function Metamodern() {
    return (
        <div>
            <h2>Вставить текст</h2>
            <img src="https://sun9-59.userapi.com/impf/1rkwSSHTSz5T5NAe9WE7sbqdwQ0up08x3WQo4w/nF3RCxY0ZSY.jpg?size=830x623&quality=96&proxy=1&sign=a8e470a3acfa49b27cad10a956aa642c" />
            <h4>
                Субверсия структуры ироничного мема - основа шутки. Метаирония – термин, используемый для обозначения формы иронии,
                выходящей за рамки обычных ограничений, которые принято считать неоднозначной позицией иронии. На уровне метаиронии
                теряется весь смысл высказывания. Слушатель (а иногда и сам говорящий) не осознает искренность обсуждаемого предмета.
                Метаирония не пытается что-то донести, а лишь указывает на существование проблемы или набора мнений. Иногда, метаиронии
                дают определение — "ирония над иронией". Метаирония получила своё распространение, благодаря роману Джозефа Хеллера
                «Уловка-22».
            </h4>
        </div>
    )
}
