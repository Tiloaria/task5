import React, { Component } from 'react';
import sticker from "./sticker.png"

import './app.css';


export class LetterContent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="content">
        <table>
          <button className="close" onClick={() => this.props.onClose()}>X</button>
          <h3 className="secret_header"> {"From " + this.props.letterSender}</h3>
          <div className="picture-container">
            <img src={sticker} className="seal" alt="img"/>
          </div>
          <p className="secret_tex"> Тюле́ни — общее название двух семейств млекопитающих, полифилетическая группа,
            ранее относимая вместе с моржовыми (Odobenidae) в отдельный отряд ластоногих (Pinnipedia), который по
            современным представлениям считается устаревшим и исключён из систематики.
            Тюленями называют представителей семейств ушастых тюленей (Otariidae) и настоящих тюленей (Phocidae). У
            обеих групп обе пары конечностей преобразованы в ласты, вооружённые когтями; задние ласты направлены
            назад. Ушастые тюлени, вероятно, произошли от примитивных медведеобразных, настоящие — по-видимому, от
            примитивных куньих. У настоящих тюленей нет ушных раковин; задние ласты служат для передвижения в воде.
            У ушастых тюленей для передвижения в воде служат передние конечности, а задние в воде служат рулями, а
            на суше подгибаются вперёд и поддерживают массивное тело. Насчитывается около 20 видов из 12 родов.
            Распространены широко; особенно многочисленны в приполярных широтах. Большинство видов образует на льдах
            залёжки (на период размножения и линьки). Беременность, как правило, длится около года.
          </p>
        </table>
      </div>
    );
  }
}

export default LetterContent;
