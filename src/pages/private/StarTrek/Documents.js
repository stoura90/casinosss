import React from 'react'
import Icon from '../../../components/Icon'

import pdfPreview from '../../../scss/media/pdf-preview-startrek.be20e88a.jpg'
import pptRU from '../../../static/documents/star/Новый текстовый документ.txt'
import pptEN from '../../../static/documents/star/Новый текстовый документ.txt'
import pptES from '../../../static/documents/star/Новый текстовый документ.txt'
import pptKG from '../../../static/documents/star/Новый текстовый документ.txt'
import pptUZ from '../../../static/documents/star/Новый текстовый документ.txt'
import pptKZ from '../../../static/documents/star/Новый текстовый документ.txt'
import pptPL from '../../../static/documents/star/Новый текстовый документ.txt'

function Documents() {
  return (
    <div className="pdf-preview">
      <h2 className="pdf-preview__title">Презентации</h2>
      <div className="pdf-preview__container">
        <div className="pdf-preview__picture">
          <img src={pdfPreview} alt="Stars" />
        </div>
        <div className="pdf-preview__download">
          <ul>
            <li>
              <a href={pptRU} download>
                <Icon iconName="download" />
                Скачать RU
              </a>
            </li>
            <li>
              <a href={pptEN} download>
                <Icon iconName="download" />
                Download EN
              </a>
            </li>
            <li>
              <a href={pptES} download>
                <Icon iconName="download" />
                Descargar ES
              </a>
            </li>
            <li>
              <a href={pptUZ} download>
                <Icon iconName="download" />
                Yuklab olish UZ
              </a>
            </li>
            <li>
              <a href={pptKZ} download>
                <Icon iconName="download" />
                Жүктеу KZ
              </a>
            </li>
            <li>
              <a href={pptKG} download>
                <Icon iconName="download" />
                Жүктөө KG
              </a>
            </li>
            <li>
              <a href={pptPL} download>
                <Icon iconName="download" />
                Ściągnij PL
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Documents
