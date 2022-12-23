FROM node:16
ARG uid=1000
ARG user=manda

RUN groupmod -g 1001 node && usermod -u 1001 -g 1001 node

RUN useradd -u $uid -d /home/$user $user
RUN mkdir -p /home/$user/.npm && chown -R $user:$user /home/$user

USER $user