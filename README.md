# Triggers and Capability Output Parser

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Samples](#samples)
- [Usage](#usage)

## About <a name = "about"></a>

An small in-house tool for cutting the manual activity of creating Quabbly's capability and trigger outputs.

## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js v10+

### Installing

A step by step series of examples that tell you how to get a development env running.

Clone and install dependencies

```sh
git clone {url}

cd outputparser

npm install

npm run dev
```

End with an example of getting some data out of the system or using it for a little demo.

## Samples <a name = "samples"></a>

### Converting a TypeScript interface to Output

Sample input:

```ts
interface SampleInterface {
  activityId: string;
  id: string;
  replyToId: string;
  messageType: string;
  createdDateTime: string;
}
```

Sample output:

```ts
[
  { name: 'activityId', type: 'string', label: 'Activity Id' },
  { name: 'id', type: 'string', label: 'Id' },
  { name: 'replyToId', type: 'string', label: 'Reply To Id' },
  { name: 'messageType', type: 'string', label: 'Message Type' },
  { name: 'createdDateTime', type: 'string', label: 'Created Date Time'}
]
```

## Usage <a name = "usage"></a>

See videos.
