'use client'

import { useSearchParams } from 'next/navigation'
import React, { Fragment, useEffect } from 'react'

import { Button } from '../../../_components/Button'
import { Message } from '../../../_components/Message'
import { useCart } from '../../../_providers/Cart'
import classes from './index.module.scss'

export const OrderConfirmationPage: React.FC<{}> = () => {
  const searchParams = useSearchParams()
  const orderID = searchParams.get('order_id')
  const error = searchParams.get('error')

  const { clearCart } = useCart()

  useEffect(() => {
    clearCart()
  }, [clearCart])

  return (
    <div>
      {error ? (
        <Fragment>
          <Message error={error} />
          <p>
            Your payment was successful but there was an error processing your order. Please contact
            us to resolve this issue.
          </p>
          <div className={classes.actions}>
            <Button appearance="primary" href="/account" label="View account" />
            <Button
              appearance="secondary"
              href={`${process.env.NEXT_PUBLIC_SERVER_URL}/orders`}
              label="View all orders"
            />
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <h1>Thank you for your order!</h1>
          <p>
            {`Your order has been confirmed. You will receive an email confirmation shortly. Your order ID is ${orderID}.`}
          </p>
          <div className={classes.actions}>
            <Button appearance="primary" href={`/orders/${orderID}`} label="View order" />
            <Button
              appearance="secondary"
              href={`${process.env.NEXT_PUBLIC_SERVER_URL}/orders`}
              label="View all orders"
            />
          </div>
        </Fragment>
      )}
    </div>
  )
}
