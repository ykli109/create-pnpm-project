#!/usr/bin/env node
const program = require("commander");
const chalk = require("chalk");
const inquirer = require("inquirer");
const path = require("path");
const fse = require("fs-extra");
const ora = require("ora");

const progress = ora("creating project from template...");
program
  .version(require("./package.json").version, "-v, --version")
  .action(() => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "please input the name of the project",
        },
      ])
      .then((answers) => {
        const name = answers.name;
        try {
          progress.start();
          fse.copySync(
            path.resolve(__dirname, "./template"),
            path.resolve(process.cwd(), `./${name}`),
            {
              overwrite: true | false,
            }
          );

          progress.succeed();
          console.log(
            chalk.green(`created pnpm project "${name}" successfully!`)
          );
        } catch (err) {
          console.error(chalk.red(err));
          progress.succeed();
        }
      });
  });

program.parse(process.argv);
