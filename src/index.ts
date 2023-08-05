#!/usr/local/bin/node

import speedTest from 'speedtest-net'

console.log('💻')
console.log('---')

const convertBSToMbps = (value: number): number => {
  return (value * 8) / 1_000_000
}

const round = (value: number, period = 0): number => {
  const roundNum = [...Array(period)].reduce((a) => {
    return a * 10
  }, 1)
  return Math.round(value * roundNum) / roundNum
}

;(async () => {
  const test = await speedTest({ acceptLicense: true })

  const { download, upload, result } = test
  console.log('インターネット速度 | color=green')
  console.log(`ダウンロード: ${round(convertBSToMbps(download.bandwidth), 2)} Mbps | color=green size=16`)
  console.log(`アップロード: ${round(convertBSToMbps(upload.bandwidth), 2)} Mbps | color=green size=16`)
  console.log('---')
  console.log(`詳細確認 | href=${result.url}`)
  console.log('---')
})()
