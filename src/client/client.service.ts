import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class ClientService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateClientDto) {
    return this.prisma.client.create({
      data: {
        tgUserId: dto.tgUserId,
        paymentMethods: dto.paymentMethods,
        addresses: {
          create: dto.addresses,
        },
      },
      include: {
        addresses: true,
      },
    });
  }

  findAll() {
    return this.prisma.client.findMany({ include: { addresses: true } });
  }

  findOne(id: string) {
    return this.prisma.client.findUnique({
      where: { id },
      include: { addresses: true },
    });
  }

  update(id: string, dto: UpdateClientDto) {
    return this.prisma.client.update({
      where: { id },
      data: {
        paymentMethods: dto.paymentMethods,
        // Для адресов можно сделать update логикой позже
      },
      include: { addresses: true },
    });
  }

  remove(id: string) {
    return this.prisma.client.delete({ where: { id } });
  }
}
