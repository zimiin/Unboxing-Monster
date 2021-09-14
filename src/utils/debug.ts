import React from "react"
import { Platform } from "react-native"

export const log = (loc: string, content: string) => {
  let print = Platform.OS + '=== ' + loc + ', ' + content
  console.log(print)
}