import React from 'react'
import { CardBuyerWrapper, CardBuyer } from '../CardBuyer/styled'

const Buyer = ({ nightTheme, activeSizeInfo }) => {
    return (
        <CardBuyerWrapper>
            <CardBuyer nightTheme={nightTheme}>
                <div>
                    {activeSizeInfo?.reservs?.map((item, index) => (
                        <div key={index}>{item.dropshipper_name.slice(0, 20)}</div>
                    ))}
                </div> |
                <div>
                    <div>
                        {`${activeSizeInfo?.reserv} шт.`}
                    </div>
                </div> |
                <div>
                    {activeSizeInfo?.reservs?.map((item, index) => (
                        <div key={index}>{item.reservdate.slice(-8, item.reservdate.length)}</div>
                    ))}
                </div>
            </CardBuyer>
        </CardBuyerWrapper>
    )
}

export default Buyer