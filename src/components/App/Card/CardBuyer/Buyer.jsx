import React from 'react'
import { CardBuyerWrapper, CardBuyer } from '../CardBuyer/styled'


const Buyer = ({ nightTheme, sizestock, activeSize }) => {
    return (
        <CardBuyerWrapper>
            <CardBuyer nightTheme={nightTheme}>
                <div>
                    {sizestock[activeSize]?.reservs?.map((item, index) => (
                        <div key={index}>{item.dropshipper_name.slice(0, 20)}</div>
                    ))}
                </div> |
                <div>
                    <div>
                        {`${sizestock[activeSize]?.reserv} шт.`}
                    </div>
                </div> |
                <div>
                    {sizestock[activeSize]?.reservs?.map((item, index) => (
                        <div key={index}>{item.reservdate.slice(-8, item.reservdate.length)}</div>
                    ))}
                </div>
            </CardBuyer>
        </CardBuyerWrapper>
    )
}

export default Buyer