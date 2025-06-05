import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { App as AmplifyApp, GitHubSourceCodeProvider } from '@aws-cdk/aws-amplify-alpha';
import { BuildSpec } from 'aws-cdk-lib/aws-codebuild';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
  

export class NextjsInfrastructureStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const amplifyApp = new AmplifyApp(this, 'MyNextJsApp', {
      appName: 'Portfolio',
      sourceCodeProvider: new GitHubSourceCodeProvider({
        owner: 'carolineschoolgm',
        repository: 'CL_CloudEngineeringPortfolio',
        oauthToken: cdk.SecretValue.secretsManager('github-token'),
      }),
      buildSpec: BuildSpec.fromObjectToYaml({
        version: '1.0',
        frontend: {
          phases: {
            preBuild: {
              commands: [
                'echo "starting this build"', 
                'cd portfolio', 
                'npm install'
              ],
            },
            build: {
              commands: ['echo "building our nextjs app..."',
                'npm run build-and-export', 
                'echo "build is completed!"'],
            },
          },
          artifacts: {
            baseDirectory: 'portfolio/out',
            files: ['**/*'],
          },
          cache: {
            paths: ['node_modules/**/*', '.next/cache/**/*'],
          },
        },
      }),
    });
  }
}
