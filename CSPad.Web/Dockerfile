FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build
WORKDIR /src
COPY CSPad.Web.csproj .
RUN dotnet restore "CSPad.Web.csproj"
COPY . .
RUN dotnet build "CSPad.Web.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "CSPad.Web.csproj" -c Release -o /app/publish

FROM nginx:alpine AS final
COPY --from=publish /app/publish/wwwroot /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
