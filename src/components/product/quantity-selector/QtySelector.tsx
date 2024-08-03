'use client'

import { useState } from 'react';
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5';
interface Props {
    quantity: number;
    onQtyChange: (qty: number) => void
}

export const QtySelector = ({ quantity, onQtyChange }: Props) => {

    const onValueChanged = (value: number) => {
        if (quantity + value < 1) return;
        onQtyChange(quantity + value)
    }

    return (
        <div className="flex ">
            <button>
                <IoRemoveCircleOutline size={30} onClick={() => onValueChanged(-1)} />
            </button>
            <span className='w-20 mx-3 px-5 rounded text-center'>{quantity}</span>
            <button>
                <IoAddCircleOutline size={30} onClick={() => onValueChanged(1)} />
            </button>

        </div>
    )
}
