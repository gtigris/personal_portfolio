# Use Node.js 20 on Alpine Linux (lightweight)
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /workspace

# Install basic dependencies: bash, git, zsh, and curl
RUN apk add --no-cache bash git zsh curl

# Install Oh My Zsh non-interactively
# RUNZSH=no prevents it from launching zsh immediately,
# CHSH=no prevents it from changing the shell automatically,
# KEEP_ZSHRC=yes prevents it from overwriting the .zshrc if it exists.
RUN RUNZSH=no CHSH=no KEEP_ZSHRC=yes sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# Copy the dependency files from the build context (which will be the project root)
COPY package.json yarn.lock ./

# Install project dependencies using Yarn
RUN yarn install --frozen-lockfile

# Copy the rest of your project files into the container
COPY . .

# Expose port 3000 (the default port for Next.js development)
EXPOSE 3000

# Set zsh as the default shell
CMD ["zsh"]
