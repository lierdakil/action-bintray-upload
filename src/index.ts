import core = require('@actions/core')
import { Bintray } from 'bintray-ts'
import glob = require('glob')

async function run() {
  const username = core.getInput('username')
  const apikey = core.getInput('apikey')
  const subject = core.getInput('subject') || username
  const repository = core.getInput('repository')
  const pkg = core.getInput('package')
  const version = core.getInput('version')
  const versionDescription = core.getInput('versionDescription')
  const versionVcsTag = core.getInput('versionVcsTag')
  const filesGlob = core.getInput('filesGlob')

  const bt = new Bintray(username, apikey, subject)
  const br = bt.repository(repository)
  await br.info()
  const bp = br.package(pkg)
  await bp.info()
  const bv = bp.version(version)
  try {
    await bv.info()
  } catch (e) {
    console.error(e)
    await bv.create({
      desc: versionDescription || '',
      vcs_tag: versionVcsTag || undefined,
    })
  }
  const gfiles = await new Promise<string[]>((resolve, reject) => {
    glob(filesGlob, (error, result) => {
      if (error) reject(error)
      else resolve(result)
    })
  })
  await Promise.all(gfiles.map((f) => bv.uploadContent(f)))
  await bv.publishContent()
}

run().catch((err) => core.setFailed(err.message))
