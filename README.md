# check-tmpmail

A minimal utility command that polls the given [1secmail](https://www.1secmail.com/) email address
for incoming emails containing a link, then prints the link's URL to stdout.

## Installing

`npm install -g check-tmpmail`

## Usage Example

```sh
#!/bin/sh -e
#
# Generates a temporary email address and opens the link in the incoming confirmation email.

email="`apg -a 1 -n 1 -M L`@1secmail.com"

echo -n "$email" | xsel --clipboard
notify-send "Copied temporary email to clipboard" -i edit-copy

timeout 120 check-tmpmail "$email" | xargs firefox --private-window
```
