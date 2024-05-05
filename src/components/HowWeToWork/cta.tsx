import React from 'react'
let styles = require('./howwetowork.module.css')

function CTA() {
  return (
    <div className={styles.ctaContainer}>
      <div className={styles.filledbutton}>Підтримати</div>
      <div className={styles.outlinedbutton}>Стати волонтером</div>
    </div>
  )
}

export default CTA
