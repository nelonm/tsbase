import express from "express"
import {z} from "zod"
import cors from "cors"
import fs from "fs/promises"

const server = express()

server.use(express.json())
server.use(cors())











server.listen(4100)