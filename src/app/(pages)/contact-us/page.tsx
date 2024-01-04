/* eslint-disable no-console */
'use client'

import React from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '../../_components/Button'
import { Input } from '../../_components/Input'

import classes from './index.module.scss'
import { Gutter } from '../../_components/Gutter'

type FormData = {
  name: string
  email: string
  message: string
}

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    // TODO Implement the logic to handle form submission
    console.log(data)
    reset()
  }

  return (
    <Gutter>
      <div className={classes.contactContainer}>
        <h2 className={classes.contactHeader}>Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <Input name="name" label="Name" required register={register} error={errors.name} />
          <Input
            name="email"
            label="Email Address"
            required
            register={register}
            error={errors.email}
            type="email"
          />
          <Input
            name="message"
            label="Message"
            required
            register={register}
            error={errors.message}
            type="text"
          />
          <Button
            type="submit"
            label={isSubmitting ? 'Sending...' : 'Send Message'}
            disabled={isSubmitting}
            appearance="primary"
            className={classes.submit}
          />
        </form>
      </div>
    </Gutter>
  )
}

export default Contact
