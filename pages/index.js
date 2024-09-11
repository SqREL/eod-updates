import React, { useState } from 'react';
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import styles from '@components/Footer.module.css'

const dateNow = new Date()

export function replaceTickets(str) {
  return str.replaceAll(/(AB#([0-9]+))/gi, '<a href="https://sphera.visualstudio.com/Sphera%20DevOps/_workitems/edit/$2">$1</a>')
}

export function formattedDate() {
  return `${dateNow.toLocaleString('default', { month: 'short' })} - ${dateNow}`
}

export function currentDate() {
  return <b>Summary for {dateNow.toLocaleString('default', { month: 'short' })}-{dateNow.getDate()}, {dateNow.getFullYear()}</b>
}

export function formatted(str) {
  let s = {__html: replaceTickets(str)}
  return <span dangerouslySetInnerHTML={s} />
}

export default function Home() {
  const [actions, setActions] = useState('None');
  const [issues, setIssues] = useState('None');
  const [outcome, setOutcome] = useState('None');
  const [nextSteps, setNextSteps] = useState('None');
  return (
    <div className={styles.row}>
      <div className={styles.column}>
          <Header title="What have you done today?" />
          <textarea rows="4" cols="60" name="name" onChange = {(event)=> setActions(event.target.value)} />
          <Header title="If you had any issues -- what are they?" />
          <textarea rows="4" cols="60" name="name" onChange = {(event)=> setIssues(event.target.value)} />
          <Header title="What is your outcome for today?" />
          <textarea rows="4" cols="60" name="name" onChange = {(event)=> setOutcome(event.target.value)} />
          <Header title="What are your next steps?" />
          <textarea rows="4" cols="60" name="name" onChange = {(event)=> setNextSteps(event.target.value)} />
      </div>
      <div className={styles.column}>
        {currentDate()}<br />
        <b>Actions:</b> {formatted(actions)}<br />
        <b>Issues:</b>  {formatted(issues)}<br />
        <b>Outcome:</b> {formatted(outcome)}<br />
        <b>Next steps:</b> {formatted(nextSteps)}<br />
      </div>
    </div>
  )
}
